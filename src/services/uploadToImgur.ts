import { useListStore } from '@/stores/list-store';
import { listMakerDataToAPI } from './changeDataModelServices';
import { generateKinklistImage } from './generateImage';
import { useSnackbarStore } from '@/stores/snackbar-store';

const IMGUR_CLIENT_ID = '9db53e5936cd02f';
export const uploadImageToImgur = async (canvas: HTMLCanvasElement): Promise<string> => {
  const formdata = new FormData();
  formdata.append('image', canvas.toDataURL().split(',')[1]);
  formdata.append('type', 'base64');
  const response = await fetch(`https://api.imgur.com/3/image`, {
    method: 'POST',
    headers: {
      Authorization: 'Client-ID ' + IMGUR_CLIENT_ID
    },
    body: formdata
  });
  const json = await response.json();
  if (!response.ok) {
    if (json.data.error) throw json.data.error;
    console.error({ response, json });
    throw new Error('Imgur response: Not OK');
  }
  return json.data.id;
};

export async function exportImage(): Promise<void> {
  const listStore = useListStore();
  const snackbarStore = useSnackbarStore();

  const { categories, ratings } = listMakerDataToAPI();
  try {
    console.log(listStore.encodeData, listStore.username);
    const canvas = generateKinklistImage(categories, ratings, listStore.username, listStore.encodeData);
    const id = await uploadImageToImgur(canvas);
    const hasAnyComment = categories.some((c) => c.kinks.some((k) => k.comment));
    console.log(`https://i.imgur.com/${id}.png`);
  } catch (ex) {
    snackbarStore.openSnackbar('error', 'Something went wrong uploading the image');
    console.error('Something went wrong uploading kinklist');
    console.error(ex);
  }
}
