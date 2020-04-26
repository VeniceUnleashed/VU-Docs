---
title: AILocoVaultBinding
---

## Summary

### Constructors

|  |
| --- |
| **[AILocoVaultBinding](#constructor-0)**() |
| **[AILocoVaultBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "vault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "distanceBeforeVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "heightBeforeVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "lengthOfVaultableObject" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "heightAfterVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "distanceAfterVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vaultType" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AILocoVaultBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AILocoVaultBinding {#constructor-0}

> **AILocoVaultBinding**()

Creates a new [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) frostbite instance.

### AILocoVaultBinding {#constructor-1}

> **AILocoVaultBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "vault" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "distanceBeforeVault" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "heightBeforeVault" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "lengthOfVaultableObject" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "heightAfterVault" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "distanceAfterVault" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vaultType" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) type.

