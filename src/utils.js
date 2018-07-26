// Purely for generating current dates for display purposes only

const generateCurrentDate = () => {
    let currentDate = new Date();
    return currentDate.toLocaleString();
}

export default generateCurrentDate;
