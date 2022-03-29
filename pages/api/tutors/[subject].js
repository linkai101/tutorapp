import tutors from '../tutors';

export default (req, res) => {
    return tutors({query: {[req.query.subject]: 100}}, res, tutors => tutors.filter(tutor => tutor.score > 0).map(tutor => ({rating: tutor.score*4+1, tutor: {name: tutor.inferredTutor.tutor.Name, icon: ""}, topic: "", description: tutor.inferredTutor.tutor.Description, availability: tutor.inferredTutor.tutor.AvailabilityStart + " to " + tutor.inferredTutor.tutor.AvailabilityEnd})));
}
