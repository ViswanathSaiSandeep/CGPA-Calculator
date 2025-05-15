function calculate(){
    const getVal = id => parseFloat(document.getElementById(id).value) || 0;
    const sgrade = getVal("sgrade");
    const agrade = getVal("agrade");
    const bgrade = getVal("bgrade");
    const cgrade = getVal("cgrade");
    const dgrade = getVal("dgrade");
    const egrade = getVal("egrade");
    const fgrade = getVal("fgrade");
    const total = sgrade+agrade+bgrade+cgrade+dgrade+egrade+fgrade;
    const review = document.getElementById("review");
    let ncgpa;
    let remark;
    if (total === 0) {
        review.innerHTML="Enter atleast 1 field";
    }
    ncgpa = (10*sgrade + 9*agrade + 8*bgrade + 7*cgrade + 6*dgrade + 5*egrade)/total;
    let cgpa = Math.ceil(ncgpa*100)/100;

    if(cgpa > 9) {
        remark = "Wow! Nailed it";
    } else if (cgpa > 8) {
        remark = "Doing great!";
    } else if (cgpa > 7) {
        remark = "Good, study a bit";
    } else {
        remark = "Needs to improve";
    }

    review.innerHTML=cgpa+" "+remark;
}
