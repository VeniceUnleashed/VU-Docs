---
title: MaterialRelationDamageData (Frostbite Container)
---
### Base Classes

[PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialRelationDamageData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialRelationDamageData(MaterialRelationDamageData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialRelationDamageData([PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) to [MaterialRelationDamageData](MaterialRelationDamageData). |
| MaterialRelationDamageData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialRelationDamageData](MaterialRelationDamageData).               |
| MaterialRelationDamageData([DataContainer](/vext/ref/cls/shr/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaterialRelationDamageData](MaterialRelationDamageData).                        |

## Properties

| Name                         | Type   | Description |
| ---------------------------- | ------ | ----------- |
| collisionDamageMultiplier    | number |             |
| collisionDamageThreshold     | number |             |
| damageProtectionMultiplier   | number |             |
| damagePenetrationMultiplier  | number |             |
| damageProtectionThreshold    | number |             |
| explosionCoverDamageModifier | number |             |
| inflictsDemolitionDamage     | bool   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationDamageData](MaterialRelationDamageData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaterialRelationDamageData](MaterialRelationDamageData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
