---
title: AILocoVaultTaskData
---


## Summary
### Constructors
| |
| ----------- |
| **[AILocoVaultTaskData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "startPoint" >}} | [Vec3](/vext/ref/shared/class/vec3) |
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
| ------ | ---- |
| **[Clone](#clone)**() | [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AILocoVaultTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AILocoVaultTaskData {#constructor-0}
> **AILocoVaultTaskData**()

Creates a new [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) frostbite structure.

## Properties
### {{% prop-heading "startPoint" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

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
### Clone
> **Clone**(): [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) type.

