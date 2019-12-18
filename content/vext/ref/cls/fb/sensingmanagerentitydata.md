---
title: SensingManagerEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SensingManagerEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SensingManagerEntityData(SensingManagerEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SensingManagerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SensingManagerEntityData](SensingManagerEntityData).                            |
| SensingManagerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SensingManagerEntityData](SensingManagerEntityData).                    |
| SensingManagerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SensingManagerEntityData](SensingManagerEntityData).              |
| SensingManagerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SensingManagerEntityData](SensingManagerEntityData). |

## Properties

| Name              | Type                               | Description |
| ----------------- | ---------------------------------- | ----------- |
| senseTerrainAreas | [SensingSphere](SensingSphere)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SensingManagerEntityData](SensingManagerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SensingManagerEntityData](SensingManagerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
