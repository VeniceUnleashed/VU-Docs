---
title: BFTargetEvaluatorComponentData
---
### Base Classes

[TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                        | Description                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BFTargetEvaluatorComponentData()                                                                   | Create a new instance of this container type.                                                                                                                |
| BFTargetEvaluatorComponentData(BFTargetEvaluatorComponentData other)                               | Create a reference copy of an instance of the same type.                                                                                                     |
| BFTargetEvaluatorComponentData([TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/) other) | Upcast an instance of type [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/) to [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/). |
| BFTargetEvaluatorComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                               | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/).                               |
| BFTargetEvaluatorComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                             | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/).                             |
| BFTargetEvaluatorComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                       | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/).                       |
| BFTargetEvaluatorComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/).          |

## Properties

| Name     | Type                                                         | Description |
| -------- | ------------------------------------------------------------ | ----------- |
| settings | [TargetEvaluationConstantData](/vext/ref/fb/targetevaluationconstantdata/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFTargetEvaluatorComponentData](/vext/ref/fb/bftargetevaluatorcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
