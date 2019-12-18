---
title: IrReverbEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| IrReverbEntityData()                                                          | Create a new instance of this container type.                                                                               |
| IrReverbEntityData(IrReverbEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| IrReverbEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [IrReverbEntityData](IrReverbEntityData).                            |
| IrReverbEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [IrReverbEntityData](IrReverbEntityData).                    |
| IrReverbEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [IrReverbEntityData](IrReverbEntityData).              |
| IrReverbEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [IrReverbEntityData](IrReverbEntityData). |

## Properties

| Name            | Type                                         | Description |
| --------------- | -------------------------------------------- | ----------- |
| impulseResponse | [ImpulseResponseAsset](ImpulseResponseAsset) |             |
| gain            | number                                       |             |
| volume          | number                                       |             |
| fadeCurve       | [FadeCurveType](FadeCurveType)               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [IrReverbEntityData](IrReverbEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [IrReverbEntityData](IrReverbEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
