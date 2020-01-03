---
title: ShaderParameterComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ShaderParameterComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| ShaderParameterComponentData(ShaderParameterComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| ShaderParameterComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ShaderParameterComponentData](/vext/ref/fb/shaderparametercomponentdata/).                      |
| ShaderParameterComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ShaderParameterComponentData](/vext/ref/fb/shaderparametercomponentdata/).                    |
| ShaderParameterComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ShaderParameterComponentData](/vext/ref/fb/shaderparametercomponentdata/).              |
| ShaderParameterComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderParameterComponentData](/vext/ref/fb/shaderparametercomponentdata/). |

## Properties

| Name                   | Type                                               | Description |
| ---------------------- | -------------------------------------------------- | ----------- |
| shaderParameterVectors | [ShaderParameterVector](/vext/ref/fb/shaderparametervector/)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ShaderParameterComponentData](/vext/ref/fb/shaderparametercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderParameterComponentData](/vext/ref/fb/shaderparametercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
