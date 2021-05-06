<?php

namespace App\Entity;

use App\Repository\MondelezSubsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MondelezSubsRepository::class)
 */
class MondelezSubs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=70)
     */
    private $subsname;

    /**
     * @ORM\Column(type="string", length=70)
     */
    private $subscountry;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubsName(): ?string
    {
        return $this->subsname;
    }

    public function setSubsName(string $subsname): self
    {
        $this->subsname = $subsname;

        return $this;
    }

    public function getSubsCountry(): ?string
    {
        return $this->subscountry;
    }

    public function setSubsCountry(string $subscountry): self
    {
        $this->subscountry = $subscountry;

        return $this;
    }
}
