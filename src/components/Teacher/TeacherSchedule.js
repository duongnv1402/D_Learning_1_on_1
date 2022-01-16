/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import WeekView from 'react-native-week-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {events} from '../../models/events';
const data = [
    {
        id: 'ad6865cb-c7fd-46b6-a6ec-db13f1f2b608',
        tutorId: '4d54d3d7-d2a9-42e5-97a2-5ed38af5789a',
        startTime: '18:00',
        endTime: '18:30',
        startTimestamp: new Date(1627988400000),
        endTimestamp: new Date(1627990200000),
        createdAt: '2021-08-02T14:09:02.823Z',
        isBooked: true,
        scheduleDetails: [
            {
                startPeriodTimestamp: 1627988400000,
                endPeriodTimestamp: 1627990200000,
                id: '384d20f7-16c1-4335-9bec-0c34ac6cfa05',
                scheduleId: 'ad6865cb-c7fd-46b6-a6ec-db13f1f2b608',
                startPeriod: '18:00',
                endPeriod: '18:30',
                createdAt: '2021-08-02T14:09:02.907Z',
                updatedAt: '2021-08-02T14:09:02.907Z',
                bookingInfo: [
                    {
                        createdAtTimeStamp: 1627913510073,
                        updatedAtTimeStamp: 1627913510101,
                        id: '13590a43-b0ef-4d13-8d10-3681c54e0050',
                        userId: '17497989-867c-4bfd-a5a4-8632886769c7',
                        scheduleDetailId: '384d20f7-16c1-4335-9bec-0c34ac6cfa05',
                        tutorMeetingLink: '/call/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiZW1haWwiOiJsZXRzdHVkeWNvaW4rdGVhY2hlcjFAZ21haWwuY29tIiwibmFtZSI6IktlZWdhbiJ9fSwicm9vbSI6IjI2MjU5ZDIzLTU4OWMtNDExYS05NDQyLTg4ZGUxNmRkYjliNiIsInJvb21OYW1lIjoiMjYyNTlkMjMtNTg5Yy00MTFhLTk0NDItODhkZTE2ZGRiOWI2IiwidXNlckNhbGwiOnsiaWQiOiIxNzQ5Nzk4OS04NjdjLTRiZmQtYTVhNC04NjMyODg2NzY5YzciLCJlbWFpbCI6InBoaGFpQGZpdC5oY211cy5lZHUudm4iLCJnb29nbGUiOiIxMTQxNDg2Njc1MTgwOTIzNDAxODgiLCJmYWNlYm9vayI6bnVsbCwicGFzc3dvcmQiOiIkMmEkMTIkM3RjWkFST3BxZi5IZWduOUxDOUZ0dWwvNGVIeFlBbXdib3RjQXd3ZXFOL3BuaUZuRjg5Z2UiLCJhdmF0YXIiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4QnZWa01lNnhPRU4xbnR6RkJRTWVwSVhJS0k3TnJ1Wm9YSDZ6Sz1zOTYtYyIsIm5hbWUiOiJIYWkgUGhhbSBIb2FuZyIsImNvdW50cnkiOm51bGwsInBob25lIjpudWxsLCJsYW5ndWFnZSI6bnVsbCwiYmlydGhkYXkiOm51bGwsInJlcXVlc3RQYXNzd29yZCI6ZmFsc2UsImlzQWN0aXZhdGVkIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTA4LTAyVDEzOjQ4OjE0LjY4OFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA4LTAyVDEzOjQ4OjE0LjY4OFoiLCJkZWxldGVkQXQiOm51bGx9LCJ1c2VyQmVDYWxsZWQiOnsiaWQiOiI0ZDU0ZDNkNy1kMmE5LTQyZTUtOTdhMi01ZWQzOGFmNTc4OWEiLCJlbWFpbCI6ImxldHN0dWR5Y29pbit0ZWFjaGVyMUBnbWFpbC5jb20iLCJnb29nbGUiOm51bGwsImZhY2Vib29rIjpudWxsLCJhdmF0YXIiOiJodHRwczovL2FwaS50dXRvcmluZy5sZXRzdHVkeS5pby9hdmF0YXIvNGQ1NGQzZDctZDJhOS00MmU1LTk3YTItNWVkMzhhZjU3ODlhYXZhdGFyMTYyNzkxMzAxNTg1MC4wMCIsIm5hbWUiOiJLZWVnYW4iLCJjb3VudHJ5IjoiWkEiLCJwaG9uZSI6bnVsbCwibGFuZ3VhZ2UiOm51bGwsImJpcnRoZGF5IjoiMTk5OS0xMi0wMSIsInJlcXVlc3RQYXNzd29yZCI6ZmFsc2UsImlzQWN0aXZhdGVkIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTA4LTAyVDEzOjU5OjM3LjI5MFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA4LTAyVDE0OjAzOjM2LjMxMVoiLCJkZWxldGVkQXQiOm51bGx9LCJpc1R1dG9yIjp0cnVlLCJzdGFydFRpbWUiOiIyMDIxLTA4LTAzVDE4OjAwOjAwKzAwOjAwIiwiZW5kU2Vzc2lvbiI6IjIwMjEtMDgtMDNUMTg6MzA6MDArMDA6MDAiLCJ0aW1lSW5Sb29tIjoxODAwLCJpYXQiOjE2Mjc5MTM1MTAsImV4cCI6MTYyODAxNTM5OSwiYXVkIjoibGl2ZXR1dG9yIiwiaXNzIjoibGl2ZXR1dG9yIiwic3ViIjoiaHR0cHM6Ly9tZWV0LnR1dG9yaW5nLmxldHN0dWR5LmlvIn0.ujzfPyNFeJzAfDyW42qA8z-eRJ_A0LXymVnypAznmyo',
                        studentMeetingLink: '/call/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiZW1haWwiOiJwaGhhaUBmaXQuaGNtdXMuZWR1LnZuIiwibmFtZSI6IkhhaSBQaGFtIEhvYW5nIn19LCJyb29tIjoiMjYyNTlkMjMtNTg5Yy00MTFhLTk0NDItODhkZTE2ZGRiOWI2Iiwicm9vbU5hbWUiOiIyNjI1OWQyMy01ODljLTQxMWEtOTQ0Mi04OGRlMTZkZGI5YjYiLCJ1c2VyQ2FsbCI6eyJpZCI6IjE3NDk3OTg5LTg2N2MtNGJmZC1hNWE0LTg2MzI4ODY3NjljNyIsImVtYWlsIjoicGhoYWlAZml0LmhjbXVzLmVkdS52biIsImdvb2dsZSI6IjExNDE0ODY2NzUxODA5MjM0MDE4OCIsImZhY2Vib29rIjpudWxsLCJwYXNzd29yZCI6IiQyYSQxMiQzdGNaQVJPcHFmLkhlZ245TEM5RnR1bC80ZUh4WUFtd2JvdGNBd3dlcU4vcG5pRm5GODlnZSIsImF2YXRhciI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnhCdlZrTWU2eE9FTjFudHpGQlFNZXBJWElLSTdOcnVab1hINnpLPXM5Ni1jIiwibmFtZSI6IkhhaSBQaGFtIEhvYW5nIiwiY291bnRyeSI6bnVsbCwicGhvbmUiOm51bGwsImxhbmd1YWdlIjpudWxsLCJiaXJ0aGRheSI6bnVsbCwicmVxdWVzdFBhc3N3b3JkIjpmYWxzZSwiaXNBY3RpdmF0ZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMDgtMDJUMTM6NDg6MTQuNjg4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDgtMDJUMTM6NDg6MTQuNjg4WiIsImRlbGV0ZWRBdCI6bnVsbH0sInVzZXJCZUNhbGxlZCI6eyJpZCI6IjRkNTRkM2Q3LWQyYTktNDJlNS05N2EyLTVlZDM4YWY1Nzg5YSIsImVtYWlsIjoibGV0c3R1ZHljb2luK3RlYWNoZXIxQGdtYWlsLmNvbSIsImdvb2dsZSI6bnVsbCwiZmFjZWJvb2siOm51bGwsImF2YXRhciI6Imh0dHBzOi8vYXBpLnR1dG9yaW5nLmxldHN0dWR5LmlvL2F2YXRhci80ZDU0ZDNkNy1kMmE5LTQyZTUtOTdhMi01ZWQzOGFmNTc4OWFhdmF0YXIxNjI3OTEzMDE1ODUwLjAwIiwibmFtZSI6IktlZWdhbiIsImNvdW50cnkiOiJaQSIsInBob25lIjpudWxsLCJsYW5ndWFnZSI6bnVsbCwiYmlydGhkYXkiOiIxOTk5LTEyLTAxIiwicmVxdWVzdFBhc3N3b3JkIjpmYWxzZSwiaXNBY3RpdmF0ZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMDgtMDJUMTM6NTk6MzcuMjkwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDgtMDJUMTQ6MDM6MzYuMzExWiIsImRlbGV0ZWRBdCI6bnVsbH0sImlzVHV0b3IiOmZhbHNlLCJzdGFydFRpbWUiOiIyMDIxLTA4LTAzVDE4OjAwOjAwKzAwOjAwIiwiZW5kU2Vzc2lvbiI6IjIwMjEtMDgtMDNUMTg6MzA6MDArMDA6MDAiLCJ0aW1lSW5Sb29tIjoxODAwLCJpYXQiOjE2Mjc5MTM1MTAsImV4cCI6MTYyODAxNTM5OSwiYXVkIjoibGl2ZXR1dG9yIiwiaXNzIjoibGl2ZXR1dG9yIiwic3ViIjoiaHR0cHM6Ly9tZWV0LnR1dG9yaW5nLmxldHN0dWR5LmlvIn0.5_0DY157RMPqgtyT5kOw4JwbmFesTxZv71SxkKBbcCA',
                        studentRequest: null,
                        tutorReview: null,
                        scoreByTutor: null,
                        createdAt: '2021-08-02T14:11:50.073Z',
                        updatedAt: '2021-08-02T14:11:50.101Z',
                        recordUrl: null,
                        isDeleted: false,
                    },
                ],
                isBooked: true,
            },
        ],
    },
    {
        id: '5c04a366-4a55-40eb-ae9a-72330d4c5a6f',
        tutorId: '4d54d3d7-d2a9-42e5-97a2-5ed38af5789a',
        startTime: '18:30',
        endTime: '19:00',
        startTimestamp: 1628163000000,
        endTimestamp: 1628164800000,
        createdAt: '2021-08-02T14:11:23.701Z',
        isBooked: false,
        scheduleDetails: [
            {
                startPeriodTimestamp: 1628163000000,
                endPeriodTimestamp: 1628164800000,
                id: 'b5dbc004-e534-4ba1-a1a5-cada709c78c4',
                scheduleId: '5c04a366-4a55-40eb-ae9a-72330d4c5a6f',
                startPeriod: '18:30',
                endPeriod: '19:00',
                createdAt: '2021-08-02T14:11:23.755Z',
                updatedAt: '2021-08-02T14:11:23.755Z',
                bookingInfo: [
                    {
                        createdAtTimeStamp: 1627913566335,
                        updatedAtTimeStamp: 1627914406498,
                        id: 'bfa81ffa-dbfd-499f-a6be-11216ae13c19',
                        userId: '17497989-867c-4bfd-a5a4-8632886769c7',
                        scheduleDetailId: 'b5dbc004-e534-4ba1-a1a5-cada709c78c4',
                        tutorMeetingLink: '/call/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiZW1haWwiOiJsZXRzdHVkeWNvaW4rdGVhY2hlcjFAZ21haWwuY29tIiwibmFtZSI6IktlZWdhbiJ9fSwicm9vbSI6IjEzZDgyODIwLTJiNzUtNDQwYS1iMjI5LTJkZWQ2NDY2YTBjNyIsInJvb21OYW1lIjoiMTNkODI4MjAtMmI3NS00NDBhLWIyMjktMmRlZDY0NjZhMGM3IiwidXNlckNhbGwiOnsiaWQiOiIxNzQ5Nzk4OS04NjdjLTRiZmQtYTVhNC04NjMyODg2NzY5YzciLCJlbWFpbCI6InBoaGFpQGZpdC5oY211cy5lZHUudm4iLCJnb29nbGUiOiIxMTQxNDg2Njc1MTgwOTIzNDAxODgiLCJmYWNlYm9vayI6bnVsbCwicGFzc3dvcmQiOiIkMmEkMTIkM3RjWkFST3BxZi5IZWduOUxDOUZ0dWwvNGVIeFlBbXdib3RjQXd3ZXFOL3BuaUZuRjg5Z2UiLCJhdmF0YXIiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQVRYQUp4QnZWa01lNnhPRU4xbnR6RkJRTWVwSVhJS0k3TnJ1Wm9YSDZ6Sz1zOTYtYyIsIm5hbWUiOiJIYWkgUGhhbSBIb2FuZyIsImNvdW50cnkiOm51bGwsInBob25lIjpudWxsLCJsYW5ndWFnZSI6bnVsbCwiYmlydGhkYXkiOm51bGwsInJlcXVlc3RQYXNzd29yZCI6ZmFsc2UsImlzQWN0aXZhdGVkIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTA4LTAyVDEzOjQ4OjE0LjY4OFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA4LTAyVDEzOjQ4OjE0LjY4OFoiLCJkZWxldGVkQXQiOm51bGx9LCJ1c2VyQmVDYWxsZWQiOnsiaWQiOiI0ZDU0ZDNkNy1kMmE5LTQyZTUtOTdhMi01ZWQzOGFmNTc4OWEiLCJlbWFpbCI6ImxldHN0dWR5Y29pbit0ZWFjaGVyMUBnbWFpbC5jb20iLCJnb29nbGUiOm51bGwsImZhY2Vib29rIjpudWxsLCJhdmF0YXIiOiJodHRwczovL2FwaS50dXRvcmluZy5sZXRzdHVkeS5pby9hdmF0YXIvNGQ1NGQzZDctZDJhOS00MmU1LTk3YTItNWVkMzhhZjU3ODlhYXZhdGFyMTYyNzkxMzAxNTg1MC4wMCIsIm5hbWUiOiJLZWVnYW4iLCJjb3VudHJ5IjoiWkEiLCJwaG9uZSI6bnVsbCwibGFuZ3VhZ2UiOm51bGwsImJpcnRoZGF5IjoiMTk5OS0xMi0wMSIsInJlcXVlc3RQYXNzd29yZCI6ZmFsc2UsImlzQWN0aXZhdGVkIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIxLTA4LTAyVDEzOjU5OjM3LjI5MFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA4LTAyVDE0OjAzOjM2LjMxMVoiLCJkZWxldGVkQXQiOm51bGx9LCJpc1R1dG9yIjp0cnVlLCJzdGFydFRpbWUiOiIyMDIxLTA4LTA1VDE4OjMwOjAwKzAwOjAwIiwiZW5kU2Vzc2lvbiI6IjIwMjEtMDgtMDVUMTk6MDA6MDArMDA6MDAiLCJ0aW1lSW5Sb29tIjoxODAwLCJpYXQiOjE2Mjc5MTM1NjYsImV4cCI6MTYyODE4OTk5OSwiYXVkIjoibGl2ZXR1dG9yIiwiaXNzIjoibGl2ZXR1dG9yIiwic3ViIjoiaHR0cHM6Ly9tZWV0LnR1dG9yaW5nLmxldHN0dWR5LmlvIn0.vgCvkJNpJZZW21pp83AIUtFBj-REYQXSe9lXhbuB_3U',
                        studentMeetingLink: '/call/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsiZW1haWwiOiJwaGhhaUBmaXQuaGNtdXMuZWR1LnZuIiwibmFtZSI6IkhhaSBQaGFtIEhvYW5nIn19LCJyb29tIjoiMTNkODI4MjAtMmI3NS00NDBhLWIyMjktMmRlZDY0NjZhMGM3Iiwicm9vbU5hbWUiOiIxM2Q4MjgyMC0yYjc1LTQ0MGEtYjIyOS0yZGVkNjQ2NmEwYzciLCJ1c2VyQ2FsbCI6eyJpZCI6IjE3NDk3OTg5LTg2N2MtNGJmZC1hNWE0LTg2MzI4ODY3NjljNyIsImVtYWlsIjoicGhoYWlAZml0LmhjbXVzLmVkdS52biIsImdvb2dsZSI6IjExNDE0ODY2NzUxODA5MjM0MDE4OCIsImZhY2Vib29rIjpudWxsLCJwYXNzd29yZCI6IiQyYSQxMiQzdGNaQVJPcHFmLkhlZ245TEM5RnR1bC80ZUh4WUFtd2JvdGNBd3dlcU4vcG5pRm5GODlnZSIsImF2YXRhciI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnhCdlZrTWU2eE9FTjFudHpGQlFNZXBJWElLSTdOcnVab1hINnpLPXM5Ni1jIiwibmFtZSI6IkhhaSBQaGFtIEhvYW5nIiwiY291bnRyeSI6bnVsbCwicGhvbmUiOm51bGwsImxhbmd1YWdlIjpudWxsLCJiaXJ0aGRheSI6bnVsbCwicmVxdWVzdFBhc3N3b3JkIjpmYWxzZSwiaXNBY3RpdmF0ZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMDgtMDJUMTM6NDg6MTQuNjg4WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDgtMDJUMTM6NDg6MTQuNjg4WiIsImRlbGV0ZWRBdCI6bnVsbH0sInVzZXJCZUNhbGxlZCI6eyJpZCI6IjRkNTRkM2Q3LWQyYTktNDJlNS05N2EyLTVlZDM4YWY1Nzg5YSIsImVtYWlsIjoibGV0c3R1ZHljb2luK3RlYWNoZXIxQGdtYWlsLmNvbSIsImdvb2dsZSI6bnVsbCwiZmFjZWJvb2siOm51bGwsImF2YXRhciI6Imh0dHBzOi8vYXBpLnR1dG9yaW5nLmxldHN0dWR5LmlvL2F2YXRhci80ZDU0ZDNkNy1kMmE5LTQyZTUtOTdhMi01ZWQzOGFmNTc4OWFhdmF0YXIxNjI3OTEzMDE1ODUwLjAwIiwibmFtZSI6IktlZWdhbiIsImNvdW50cnkiOiJaQSIsInBob25lIjpudWxsLCJsYW5ndWFnZSI6bnVsbCwiYmlydGhkYXkiOiIxOTk5LTEyLTAxIiwicmVxdWVzdFBhc3N3b3JkIjpmYWxzZSwiaXNBY3RpdmF0ZWQiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjEtMDgtMDJUMTM6NTk6MzcuMjkwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDgtMDJUMTQ6MDM6MzYuMzExWiIsImRlbGV0ZWRBdCI6bnVsbH0sImlzVHV0b3IiOmZhbHNlLCJzdGFydFRpbWUiOiIyMDIxLTA4LTA1VDE4OjMwOjAwKzAwOjAwIiwiZW5kU2Vzc2lvbiI6IjIwMjEtMDgtMDVUMTk6MDA6MDArMDA6MDAiLCJ0aW1lSW5Sb29tIjoxODAwLCJpYXQiOjE2Mjc5MTM1NjYsImV4cCI6MTYyODE4OTk5OSwiYXVkIjoibGl2ZXR1dG9yIiwiaXNzIjoibGl2ZXR1dG9yIiwic3ViIjoiaHR0cHM6Ly9tZWV0LnR1dG9yaW5nLmxldHN0dWR5LmlvIn0.1waEAER4mWinsEDxKaXmwuF82AkOqltEi7Ftk8-bwj8',
                        studentRequest: null,
                        tutorReview: null,
                        scoreByTutor: null,
                        createdAt: '2021-08-02T14:12:46.335Z',
                        updatedAt: '2021-08-02T14:26:46.498Z',
                        recordUrl: null,
                        isDeleted: true,
                    },
                ],
                isBooked: false,
            },
        ],
    },
];

for (let event in data) {
    event.description = event.isBooked ? 'Booked' : 'Book';
    event.color = event.isBooked ? 'deepskyblue' : 'white';
}
export default function TeacherSchedule(props) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let event = {
            id: events.length + 1,
            description: 'Booked',
            startDate: date,
            endDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 2, date.getMinutes(), date.getSeconds()),
            color: 'deepskyblue',
        };
        events.push(event);
        hideDateTimePicker();
        Alert.alert('Success', 'Successful booking',
      [
          {
              text:'ok',
              onPress: ()=>{
                    props.navigation.goBack();
              },
          },
      ]);
    };
    return (
        <ScrollView>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={styles.Text}>Schedule: </Text>
                <TouchableOpacity style={styles.buttonSave} onPress={showDateTimePicker}>
                    <Text >Booking</Text>
                </TouchableOpacity>
            </View>
            <WeekView
            events={events}
            selectedDate={new Date(Date.now())}
            numberOfDays={7}
            hoursInDisplay={30}
            />
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDateTimePicker}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  Text: {
    color: 'lightskyblue',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonSave: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    padding: 10,
    width: 100,
    borderRadius: 28,
    margin: 8,
    alignSelf: 'center',
  },
});
