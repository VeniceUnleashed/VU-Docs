---
title: RagdollBinding
---

## Summary

### Constructors

|  |
| --- |
| **[RagdollBinding](#constructor-0)**() |
| **[RagdollBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "ragdollOnBack" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "ragdollBlend" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "ragdollForceBlendDisabled" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "ragdollActiveTime" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "ragdollFullyBlendedIn" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RagdollBinding](/vext/ref/fb/ragdollbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RagdollBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RagdollBinding {#constructor-0}

> **RagdollBinding**()

Creates a new [RagdollBinding](/vext/ref/fb/ragdollbinding) frostbite instance.

### RagdollBinding {#constructor-1}

> **RagdollBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RagdollBinding](/vext/ref/fb/ragdollbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "ragdollOnBack" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "ragdollBlend" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "ragdollForceBlendDisabled" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "ragdollActiveTime" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "ragdollFullyBlendedIn" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [RagdollBinding](/vext/ref/fb/ragdollbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RagdollBinding](/vext/ref/fb/ragdollbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RagdollBinding](/vext/ref/fb/ragdollbinding) type.

