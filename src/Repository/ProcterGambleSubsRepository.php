<?php

namespace App\Repository;

use App\Entity\ProcterGambleSubs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProcterGambleSubs|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProcterGambleSubs|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProcterGambleSubs[]    findAll()
 * @method ProcterGambleSubs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProcterGambleSubsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProcterGambleSubs::class);
    }

    // /**
    //  * @return ProcterGambleSubs[] Returns an array of ProcterGambleSubs objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProcterGambleSubs
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
