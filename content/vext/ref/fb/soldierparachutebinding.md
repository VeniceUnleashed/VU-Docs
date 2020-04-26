---
title: SoldierParachuteBinding
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierParachuteBinding](#constructor-0)**() |
| **[SoldierParachuteBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "enabled" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "steerLeftRight" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "accelerateBrake" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "pitch" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "roll" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierParachuteBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierParachuteBinding {#constructor-0}

> **SoldierParachuteBinding**()

Creates a new [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) frostbite instance.

### SoldierParachuteBinding {#constructor-1}

> **SoldierParachuteBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "enabled" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "steerLeftRight" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "accelerateBrake" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "pitch" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "roll" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) type.

