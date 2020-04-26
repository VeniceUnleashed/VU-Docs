---
title: CannedAnimationBinding
---

## Summary

### Constructors

|  |
| --- |
| **[CannedAnimationBinding](#constructor-0)**() |
| **[CannedAnimationBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "levelIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "scenarioIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "actorIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "partIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "triggerCannedAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "exitCannedAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "externalTime" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "blendValue" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "advanceScenario" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enteredLoop" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CannedAnimationBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CannedAnimationBinding {#constructor-0}

> **CannedAnimationBinding**()

Creates a new [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) frostbite instance.

### CannedAnimationBinding {#constructor-1}

> **CannedAnimationBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "levelIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "scenarioIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "actorIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "partIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "triggerCannedAnimation" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "exitCannedAnimation" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "externalTime" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "blendValue" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "advanceScenario" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enteredLoop" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) type.

