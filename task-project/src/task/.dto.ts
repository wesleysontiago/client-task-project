import { ApiProperty } from "@nestjs/swagger"

export class createTask {
    id: number
    @ApiProperty({ type: 'string' })
    title: string
    @ApiProperty({ type: 'string' })
    assignedTo: string
    @ApiProperty({ type: 'string' })
    description: string
    @ApiProperty({ type: 'string' })
    state: string
    @ApiProperty({ type: 'string' })
    severity: string
    @ApiProperty({ type: 'string' })
    area: string
    createdAt: Date
}

export class updateTask {
    id: number
    @ApiProperty({ type: 'string' })
    title: string
    @ApiProperty({ type: 'string' })
    assignedTo: string
    @ApiProperty({ type: 'string' })
    description: string
    @ApiProperty({ type: 'string' })
    state: string
    @ApiProperty({ type: 'string' })
    severity: string
    @ApiProperty({ type: 'string' })
    area: string
    createdAt: Date
    updatedAt: Date
}