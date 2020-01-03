---
title: MaterialRelationDamageData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialRelationDamageData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialRelationDamageData(MaterialRelationDamageData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialRelationDamageData([PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata/). |
| MaterialRelationDamageData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata/).               |
| MaterialRelationDamageData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata/).                        |

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
| [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
