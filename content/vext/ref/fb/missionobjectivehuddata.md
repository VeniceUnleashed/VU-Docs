---
title: MissionObjectiveHudData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MissionObjectiveHudData](#constructor-0)**() |
| **[MissionObjectiveHudData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MissionObjectiveHudData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cameraPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "horizontalBoundaries" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "verticalBoundaries" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "cameraRotation" >}} | float |
| {{< prop "cameraFov" >}} | float |
| {{< prop "cameraLookDistance" >}} | float |
| {{< prop "cameraDistance" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MissionObjectiveHudData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MissionObjectiveHudData {#constructor-0}

> **MissionObjectiveHudData**()

Creates a new [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata) frostbite instance.

### MissionObjectiveHudData {#constructor-1}

> **MissionObjectiveHudData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MissionObjectiveHudData {#constructor-2}

> **MissionObjectiveHudData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata). |

## Properties

### {{% prop-heading "cameraPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "horizontalBoundaries" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "verticalBoundaries" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "cameraRotation" %}}

> **float**

### {{% prop-heading "cameraFov" %}}

> **float**

### {{% prop-heading "cameraLookDistance" %}}

> **float**

### {{% prop-heading "cameraDistance" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MissionObjectiveHudData](/vext/ref/fb/missionobjectivehuddata) type.

