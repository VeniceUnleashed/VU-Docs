---
title: TargetEvaluatorComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| TargetEvaluatorComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| TargetEvaluatorComponentData(TargetEvaluatorComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| TargetEvaluatorComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/).                      |
| TargetEvaluatorComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/).                    |
| TargetEvaluatorComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/).              |
| TargetEvaluatorComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| updateInterval | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TargetEvaluatorComponentData](/vext/ref/fb/targetevaluatorcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
