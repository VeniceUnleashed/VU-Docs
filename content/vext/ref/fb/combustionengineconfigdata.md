---
title: CombustionEngineConfigData
---
### Base Classes

[EngineConfigData](/vext/ref/fb/engineconfigdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| CombustionEngineConfigData()                                                          | Create a new instance of this container type.                                                                                               |
| CombustionEngineConfigData(CombustionEngineConfigData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| CombustionEngineConfigData([EngineConfigData](/vext/ref/fb/engineconfigdata/) other)                | Upcast an instance of type [EngineConfigData](/vext/ref/fb/engineconfigdata/) to [CombustionEngineConfigData](/vext/ref/fb/combustionengineconfigdata/).                |
| CombustionEngineConfigData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CombustionEngineConfigData](/vext/ref/fb/combustionengineconfigdata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CombustionEngineConfigData](/vext/ref/fb/combustionengineconfigdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CombustionEngineConfigData](/vext/ref/fb/combustionengineconfigdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
