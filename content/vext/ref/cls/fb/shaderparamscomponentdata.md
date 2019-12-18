---
title: ShaderParamsComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderParamsComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| ShaderParamsComponentData(ShaderParamsComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| ShaderParamsComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ShaderParamsComponentData](ShaderParamsComponentData).                      |
| ShaderParamsComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ShaderParamsComponentData](ShaderParamsComponentData).                    |
| ShaderParamsComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ShaderParamsComponentData](ShaderParamsComponentData).              |
| ShaderParamsComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ShaderParamsComponentData](ShaderParamsComponentData). |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| value         | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| parameterName | string                            |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderParamsComponentData](ShaderParamsComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ShaderParamsComponentData](ShaderParamsComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
