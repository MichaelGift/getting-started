import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Calculation, CalculationDTO } from "src/database/entities/calculation.entity";
import { Repository } from "typeorm";

@Injectable()
export class CalcProjService {
    constructor(
        @InjectRepository(Calculation)
        private calculationRepo: Repository<Calculation>,
    ) {}

    async createCalculation(data: CalculationDTO) {
        const { numOne, numTwo, operation} = data;

        let result: number;

        switch (operation) {
            case '+':
                result = numOne + numTwo;
                break;
            case '-':
                result = numOne - numTwo;
                break;
            case '*':
                result = numOne * numTwo;
                break;
            case '/':
                result = numOne / numTwo;
                break;
            default:
                throw new Error('Invalid operation');
        }

        const calc = this.calculationRepo.create({
            numOne,
            numTwo,
            operation,
            result
        });

        return this.calculationRepo.save(calc);
    }

    findAll() {
        return this.calculationRepo.find();
    }


}