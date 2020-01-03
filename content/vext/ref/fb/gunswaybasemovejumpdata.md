---
title: GunSwayBaseMoveJumpData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| GunSwayBaseMoveJumpData()                              | Create a new instance of this structure type.            |
| GunSwayBaseMoveJumpData(GunSwayBaseMoveJumpData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| baseValue            | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| moving               | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| jumping              | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| sprinting            | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| vaultingSmallObject  | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| vaultingMediumObject | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata/) |             |
| recoil               | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata/)         |             |
| gunSwayLag           | [GunSwayLagData](/vext/ref/fb/gunswaylagdata/)               |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata/) | [Clone](#clone) |            |

### Clone

> [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
