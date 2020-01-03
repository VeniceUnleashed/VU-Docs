---
title: DynamicAOComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DynamicAOComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| DynamicAOComponentData(DynamicAOComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| DynamicAOComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata/).                      |
| DynamicAOComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata/).                    |
| DynamicAOComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata/).              |
| DynamicAOComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata/). |

## Properties

| Name                   | Type           | Description |
| ---------------------- | -------------- | ----------- |
| realm                  | [Realm](/vext/ref/fb/realm/) |             |
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
| [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
