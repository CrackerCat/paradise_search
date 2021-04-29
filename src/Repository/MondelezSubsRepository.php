<?php

namespace App\Repository;

use App\Entity\MondelezSubs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MondelezSubs|null find($id, $lockMode = null, $lockVersion = null)
 * @method MondelezSubs|null findOneBy(array $criteria, array $orderBy = null)
 * @method MondelezSubs[]    findAll()
 * @method MondelezSubs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MondelezSubsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MondelezSubs::class);
    }

    // /**
    //  * @return MondelezSubs[] Returns an array of MondelezSubs objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MondelezSubs
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
