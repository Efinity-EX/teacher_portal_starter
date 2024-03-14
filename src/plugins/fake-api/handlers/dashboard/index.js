import { HttpResponse, http } from 'msw'
import { db } from '@db/dashboard/db'

export const handlerDashboard = [
  http.get('/api/dashboard/analytics/projects', () => {
    return HttpResponse.json(db.analytics, { status: 200 })
  }),
]
