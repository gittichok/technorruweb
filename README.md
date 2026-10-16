# เว็บไซต์คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏราชนครินทร์

เว็บไซต์สองภาษา (ไทย `/` และอังกฤษ `/en/`) สร้างด้วย [Astro](https://astro.build) + Tailwind CSS
จัดการเนื้อหาผ่าน [Sveltia CMS](https://github.com/sveltia/sveltia-cms) ที่ `/admin/` และเผยแพร่ฟรีบน Cloudflare Pages

## สำหรับผู้ดูแลเนื้อหา (admin 3 คน)

1. เข้า `https://<โดเมนเว็บ>/admin/` แล้วเลือก **Sign in with Token**
2. สร้าง GitHub Personal Access Token (fine-grained) ที่ GitHub > Settings > Developer settings
   ให้สิทธิ์เฉพาะ repo `technorruweb` หัวข้อ *Contents: Read and write*
3. แก้ไขได้ 3 หมวด
   - **ข่าวและกิจกรรม** เขียนภาษาไทยก่อน แล้วสลับแท็บ English เพื่อเขียนภาษาอังกฤษ
   - **หน้าเนื้อหา** ประวัติ ทำไมต้องเรา สมัครเรียน ฯลฯ
   - **ข้อมูลคณะ** หลักสูตร บุคลากร เอกสาร ข้อมูลติดต่อ และ **หน้า Intro / โหมดไว้อาลัย**
4. กดบันทึก เว็บจะอัปเดตเองภายใน 1-2 นาที

### หน้า Intro สำหรับโอกาสพิเศษ
ข้อมูลคณะ > หน้า Intro: เปิดใช้, กำหนดวันเริ่ม-สิ้นสุด, ใส่ภาพจอคอม (1920x1080) และมือถือ (1080x1920)
ผู้เข้าชมเห็นครั้งเดียวต่อการเปิดเบราว์เซอร์ และกด "เข้าสู่เว็บไซต์" เพื่อข้ามได้
**โหมดไว้อาลัย** ทำให้ทั้งเว็บเป็นสีเทา

### ไฟล์บน Google Drive
ลิงก์เอกสารที่ใส่ในเว็บต้องตั้งค่าแชร์เป็น "ทุกคนที่มีลิงก์ดูได้" มิฉะนั้นผู้เข้าชมจะเปิดไม่ได้

## สำหรับนักพัฒนา

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # สร้างเว็บใน dist/ พร้อมดัชนีค้นหา Pagefind
```

| ส่วน | ตำแหน่ง |
| --- | --- |
| ข้อความเมนู/ปุ่มสองภาษา | `src/i18n/ui.ts` |
| โครงเมนู | `src/lib/nav.ts` |
| ข้อมูล (หลักสูตร บุคลากร เอกสาร ติดต่อ Intro) | `src/data/*.json` |
| ข่าว | `src/content/news/{th,en}/*.md` |
| หน้าเนื้อหายาว | `src/content/pages/{th,en}/*.md` |
| หน้าเว็บ (สร้างทั้งไทยและอังกฤษจากไฟล์เดียว) | `src/pages/[...lang]/` |
| สี (แดงเลือดหมู ขาว ทอง) และฟอนต์ | `src/styles/global.css` |
| ตั้งค่า CMS | `public/admin/config.yml` |

## เผยแพร่บน Cloudflare Pages (ฟรี)

1. Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git > เลือก `technorruweb`
2. Framework preset: **Astro**, Build command: `npm run build`, Output: `dist`
3. ทุกครั้งที่ push หรือ admin บันทึกจาก CMS เว็บจะ build ใหม่อัตโนมัติ
4. โดเมน: Custom domains > เพิ่ม `techno.rru.ac.th` แล้วขอให้ฝ่าย IT มหาวิทยาลัยเพิ่ม CNAME ตามที่ Cloudflare แจ้ง
