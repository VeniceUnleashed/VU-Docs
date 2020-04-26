---
title: HitReactionComponentBinding
---

## Summary

### Constructors

|  |
| --- |
| **[HitReactionComponentBinding](#constructor-0)**() |
| **[HitReactionComponentBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "hit" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "allowKillFromAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "direction" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "firingDistance" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "boneType" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "impactType" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "immortal" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "randomAnimationIndex" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HitReactionComponentBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HitReactionComponentBinding {#constructor-0}

> **HitReactionComponentBinding**()

Creates a new [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding) frostbite instance.

### HitReactionComponentBinding {#constructor-1}

> **HitReactionComponentBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "hit" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "allowKillFromAnimation" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "direction" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "firingDistance" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "boneType" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "impactType" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "immortal" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "randomAnimationIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding) type.

