---
title: AnimationConfigurationShootModuleData
---

## Summary

### Constructors

|  |
| --- |
| **[AnimationConfigurationShootModuleData](#constructor-0)**() |
| **[AnimationConfigurationShootModuleData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "zoomedKickbackFactor" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimationConfigurationShootModuleData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimationConfigurationShootModuleData {#constructor-0}

> **AnimationConfigurationShootModuleData**()

Creates a new [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata) frostbite instance.

### AnimationConfigurationShootModuleData {#constructor-1}

> **AnimationConfigurationShootModuleData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "zoomedKickbackFactor" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimationConfigurationShootModuleData](/vext/ref/fb/animationconfigurationshootmoduledata) type.

