---
title: AreaValueTeam
---

## Summary

### Constructors

|  |
| --- |
| **[AreaValueTeam](#constructor-0)**() |
| **[AreaValueTeam](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "areaValue" >}} | int |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AreaValueTeam](/vext/ref/fb/areavalueteam) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AreaValueTeam" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AreaValueTeam {#constructor-0}

> **AreaValueTeam**()

Creates a new [AreaValueTeam](/vext/ref/fb/areavalueteam) frostbite instance.

### AreaValueTeam {#constructor-1}

> **AreaValueTeam**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AreaValueTeam](/vext/ref/fb/areavalueteam) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "areaValue" %}}

> **int**

### {{% prop-heading "team" %}}

> **[TeamId](/vext/ref/fb/teamid)**

## Methods

### Clone {#clone}

> **Clone**(): [AreaValueTeam](/vext/ref/fb/areavalueteam)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AreaValueTeam](/vext/ref/fb/areavalueteam)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AreaValueTeam](/vext/ref/fb/areavalueteam) type.

