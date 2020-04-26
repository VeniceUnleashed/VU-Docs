---
title: AILocoVaultTaskData
---

## Summary

### Constructors

|  |
| --- |
| **[AILocoVaultTaskData](#constructor-0)**() |
| **[AILocoVaultTaskData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "startPoint" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "distanceBeforeVault" >}} | float |
| {{< prop "heightBeforeVault" >}} | float |
| {{< prop "heightAfterVault" >}} | float |
| {{< prop "lengthOfVaultableObject" >}} | float |
| {{< prop "worldAngle" >}} | float |
| {{< prop "distanceAfterVault" >}} | float |
| {{< prop "vaultType" >}} | [WaypointVaultType](/vext/ref/fb/waypointvaulttype) |
| {{< prop "useClientPosition" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AILocoVaultTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AILocoVaultTaskData {#constructor-0}

> **AILocoVaultTaskData**()

Creates a new [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) frostbite instance.

### AILocoVaultTaskData {#constructor-1}

> **AILocoVaultTaskData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "startPoint" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "distanceBeforeVault" %}}

> **float**

### {{% prop-heading "heightBeforeVault" %}}

> **float**

### {{% prop-heading "heightAfterVault" %}}

> **float**

### {{% prop-heading "lengthOfVaultableObject" %}}

> **float**

### {{% prop-heading "worldAngle" %}}

> **float**

### {{% prop-heading "distanceAfterVault" %}}

> **float**

### {{% prop-heading "vaultType" %}}

> **[WaypointVaultType](/vext/ref/fb/waypointvaulttype)**

### {{% prop-heading "useClientPosition" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) type.

