---
title: SoldierFootplantEffectComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierFootplantEffectComponentData()                                                          | Create a new instance of this container type.                                                                                                                 |
| SoldierFootplantEffectComponentData(SoldierFootplantEffectComponentData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| SoldierFootplantEffectComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierFootplantEffectComponentData](SoldierFootplantEffectComponentData).                      |
| SoldierFootplantEffectComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierFootplantEffectComponentData](SoldierFootplantEffectComponentData).                    |
| SoldierFootplantEffectComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierFootplantEffectComponentData](SoldierFootplantEffectComponentData).              |
| SoldierFootplantEffectComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierFootplantEffectComponentData](SoldierFootplantEffectComponentData). |

## Properties

| Name                      | Type                                           | Description |
| ------------------------- | ---------------------------------------------- | ----------- |
| footMaterialPair          | [MaterialContainerPair](MaterialContainerPair) |             |
| heightOverGroundThreshold | number                                         |             |
| footVelocityThreshold     | number                                         |             |
| lodDistance               | number                                         |             |
| fullFootplantingEnabled   | bool                                           |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierFootplantEffectComponentData](SoldierFootplantEffectComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierFootplantEffectComponentData](SoldierFootplantEffectComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
