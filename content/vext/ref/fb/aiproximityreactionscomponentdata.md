---
title: AIProximityReactionsComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AIProximityReactionsComponentData()                                                          | Create a new instance of this container type.                                                                                                             |
| AIProximityReactionsComponentData(AIProximityReactionsComponentData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| AIProximityReactionsComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AIProximityReactionsComponentData](/vext/ref/fb/aiproximityreactionscomponentdata/).                      |
| AIProximityReactionsComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AIProximityReactionsComponentData](/vext/ref/fb/aiproximityreactionscomponentdata/).                    |
| AIProximityReactionsComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AIProximityReactionsComponentData](/vext/ref/fb/aiproximityreactionscomponentdata/).              |
| AIProximityReactionsComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIProximityReactionsComponentData](/vext/ref/fb/aiproximityreactionscomponentdata/). |

## Properties

| Name                     | Type                                                       | Description |
| ------------------------ | ---------------------------------------------------------- | ----------- |
| binding                  | [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding/) |             |
| minExplosionImpulseForce | number                                                     |             |
| maxExplosionLookDistance | number                                                     |             |
| fireReactionDistance     | number                                                     |             |
| enabled                  | bool                                                       |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AIProximityReactionsComponentData](/vext/ref/fb/aiproximityreactionscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIProximityReactionsComponentData](/vext/ref/fb/aiproximityreactionscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
