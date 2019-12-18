---
title: DynamicAOComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DynamicAOComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| DynamicAOComponentData(DynamicAOComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| DynamicAOComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DynamicAOComponentData](DynamicAOComponentData).                      |
| DynamicAOComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicAOComponentData](DynamicAOComponentData).                    |
| DynamicAOComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicAOComponentData](DynamicAOComponentData).              |
| DynamicAOComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DynamicAOComponentData](DynamicAOComponentData). |

## Properties

| Name                   | Type           | Description |
| ---------------------- | -------------- | ----------- |
| realm                  | [Realm](Realm) |             |
| ssaoMaxDistanceOuter   | number         |             |
| ssaoFade               | number         |             |
| ssaoRadius             | number         |             |
| ssaoMaxDistanceInner   | number         |             |
| hbaoRadius             | number         |             |
| hbaoAttenuation        | number         |             |
| hbaoAngleBias          | number         |             |
| hbaoPowerExponent      | number         |             |
| hbaoContrast           | number         |             |
| hbaoMaxFootprintRadius | number         |             |
| enable                 | bool           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DynamicAOComponentData](DynamicAOComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DynamicAOComponentData](DynamicAOComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
