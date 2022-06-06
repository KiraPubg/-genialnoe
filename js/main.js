const selectContent = document.querySelector(".select__content");
const selectContents = document.querySelector(".select__contents");
const selectContentText = document.querySelectorAll(".select__content-text");
const nameInp = document.querySelector(".content__name-input");
const famInp = document.querySelector(".content__fam-input");
const submitBtn = document.querySelector(".submit-btn");
const infoName = document.querySelector(".info__name");
const infoFam = document.querySelector(".info__fam");
const infoAge = document.querySelector(".info__age");
const userInfo = {};
selectContent.addEventListener("click", () => {
	selectContents.classList.toggle("active");
})
selectContentText.forEach(el => {
	el.addEventListener("click", () => {
		selectContent.style.border = "1px solid";
		selectContent.innerText = el.innerText;
		userInfo.age = el.innerText;
		selectContents.classList.toggle("active");
	})
})
nameInp.addEventListener("input", (e) => {
	nameInp.style.border = "1px solid";
	userInfo.name = e.target.value;
})
famInp.addEventListener("input", (e) => {
	userInfo.fam = e.target.value;
	famInp.style.border = "1px solid";
})

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (userInfo.name && userInfo.age && userInfo.fam) {
		infoName.innerText = userInfo.name;
		infoFam.innerText = userInfo.fam;
		infoAge.innerText = userInfo.age;
	} else {
		nameInp.style.border = "1px solid red";
		famInp.style.border = "1px solid red";
		selectContent.style.border = "1px solid red";
	}
})