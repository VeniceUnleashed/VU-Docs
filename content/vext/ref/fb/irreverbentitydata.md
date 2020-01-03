---
title: IrReverbEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| IrReverbEntityData()                                                          | Create a new instance of this container type.                                                                               |
| IrReverbEntityData(IrReverbEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| IrReverbEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata/).                            |
| IrReverbEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata/).                    |
| IrReverbEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata/).              |
| IrReverbEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IrReverbEntityData](/vext/ref/fb/irreverbentitydata/). |

## Properties

| Name            | Type                                         | Description |
| --------------- | -------------------------------------------- | ----------- |
| impulseResponse | [ImpulseResponseAsset](/vext/ref/fb/impulseresponseasset/) |             |
| gain            | number                                       |             |
| volume          | number                                       |             |
| fadeCurve       | [FadeCurveType](/vext/ref/fb/fadecurvetype/)               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [IrReverbEntityData](/vext/ref/fb/irreverbentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IrReverbEntityData](/vext/ref/fb/irreverbentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
