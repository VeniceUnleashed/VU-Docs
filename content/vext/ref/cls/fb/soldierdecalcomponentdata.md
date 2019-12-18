---
title: SoldierDecalComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierDecalComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierDecalComponentData(SoldierDecalComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierDecalComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierDecalComponentData](SoldierDecalComponentData).                      |
| SoldierDecalComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierDecalComponentData](SoldierDecalComponentData).                    |
| SoldierDecalComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierDecalComponentData](SoldierDecalComponentData).              |
| SoldierDecalComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierDecalComponentData](SoldierDecalComponentData). |

## Properties

| Name            | Type                                   | Description |
| --------------- | -------------------------------------- | ----------- |
| splashDecal     | [DecalTemplateData](DecalTemplateData) |             |
| splashRayLength | number                                 |             |
| poolDecal       | [DecalTemplateData](DecalTemplateData) |             |
| poolRayYOffset  | number                                 |             |
| poolRayLength   | number                                 |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierDecalComponentData](SoldierDecalComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierDecalComponentData](SoldierDecalComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
