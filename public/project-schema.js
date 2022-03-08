const Project = {
    "id": Int16Array,
    "name": String,
    "date": String - "OCT-DEC 2017",
    "tag_line": String,
    "tag_img": URL - local - "/work_images/work2_1.png",
    "tags": Array - Int16Array,
    "summary": String,
    "details": Array - Project_Detail_Text/Project_Detail_Hyperlink/Project_Detail_Image
}

const Project_Detail_Text = {
    "id": String,
    "div_type": "text", 
    "div_title": String,
    "div_items": String
}
const Project_Detail_Hyperlink = {
    "id": String,
    "div_type": "hyperlink", 
    "div_title": String,
    "div_symbol": URL - local,
    "div_link": URL
}
const Project_Detail_Image = {
    "id": String,
    "div_type": "image/jpg", 
    "div_title": String,
    "div_items": URL - local -  "/work_images/work2_4.png"
}
const Project_Detail_Video = {
    "id": String,
    "div_type": "iframe/video", 
    "div_items": URL 
}