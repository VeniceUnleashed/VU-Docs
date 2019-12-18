---
title: ProceduralAwarenessAntRefs (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ProceduralAwarenessAntRefs()                                                          | Create a new instance of this container type.                                                                                               |
| ProceduralAwarenessAntRefs(ProceduralAwarenessAntRefs other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| ProceduralAwarenessAntRefs([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ProceduralAwarenessAntRefs](ProceduralAwarenessAntRefs). |

## Properties

| Name                             | Type             | Description |
| -------------------------------- | ---------------- | ----------- |
| proceduralAwarenessActive        | [AntRef](AntRef) |             |
| proceduralAwarenessHumanIKActive | [AntRef](AntRef) |             |
| proceduralAwarenessData          | [AntRef](AntRef) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ProceduralAwarenessAntRefs](ProceduralAwarenessAntRefs) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ProceduralAwarenessAntRefs](ProceduralAwarenessAntRefs) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
