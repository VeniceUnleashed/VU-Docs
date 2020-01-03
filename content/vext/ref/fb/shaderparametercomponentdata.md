---
title: ShaderParameterComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderParameterComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| ShaderParameterComponentData(ShaderParameterComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| ShaderParameterComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ShaderParameterComponentData](ShaderParameterComponentData).                      |
| ShaderParameterComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ShaderParameterComponentData](ShaderParameterComponentData).                    |
| ShaderParameterComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ShaderParameterComponentData](ShaderParameterComponentData).              |
| ShaderParameterComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderParameterComponentData](ShaderParameterComponentData). |

## Properties

| Name                   | Type                                               | Description |
| ---------------------- | -------------------------------------------------- | ----------- |
| shaderParameterVectors | [ShaderParameterVector](ShaderParameterVector)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderParameterComponentData](ShaderParameterComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderParameterComponentData](ShaderParameterComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
