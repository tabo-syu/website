import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/components/ui/GoogleTagManager';
import TopHead from '@/components/ui/Head';
import { googleTagManagerId } from '@/lib/gtm';

export default function Head() {
  return (
    <>
      <TopHead
        title=''
        description='たぼすけのブログ。いろいろなことを書く（予定）。'
        image='/ogp.jpg'
        type='website'
      />
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
    </>
  );
}
