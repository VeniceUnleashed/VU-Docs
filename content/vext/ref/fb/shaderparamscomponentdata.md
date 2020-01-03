---
title: ShaderParamsComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderParamsComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| ShaderParamsComponentData(ShaderParamsComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ShaderParamsComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ShaderParamsComponentData](/vext/ref/fb/shaderparamscomponentdata/).                      |
| ShaderParamsComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ShaderParamsComponentData](/vext/ref/fb/shaderparamscomponentdata/).                    |
| ShaderParamsComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ShaderParamsComponentData](/vext/ref/fb/shaderparamscomponentdata/).              |
| ShaderParamsComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderParamsComponentData](/vext/ref/fb/shaderparamscomponentdata/). |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| value         | [Vec4](/vext/ref/shared/class/vec4) |             |
| parameterName | string                            |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderParamsComponentData](/vext/ref/fb/shaderparamscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderParamsComponentData](/vext/ref/fb/shaderparamscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
