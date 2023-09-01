function skillsMember() {
    var member = {
        skills: ['JavaScript', 'Ruby', 'Python', 'C++'],
        age: 34,
        addSkill: function (skill) {
            this.skills.push(skill);
        },
        removeSkill: function (skill) {
            this.skills = this.skills.filter(function (s) {
                return s !== skill;
            });
        }
    };
    member.addSkill('C#');
    member.removeSkill('Python');
    console.log(member.skills);
}