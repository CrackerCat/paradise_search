<?php

namespace App\Repository;

use App\Entity\PepsiCoSubs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PepsiCoSubs|null find($id, $lockMode = null, $lockVersion = null)
 * @method PepsiCoSubs|null findOneBy(array $criteria, array $orderBy = null)
 * @method PepsiCoSubs[]    findAll()
 * @method PepsiCoSubs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PepsiCoSubsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PepsiCoSubs::class);
    }

    // /**
    //  * @return PepsiCoSubs[] Returns an array of PepsiCoSubs objects
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
    public function findOneBySomeField($value): ?PepsiCoSubs
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
