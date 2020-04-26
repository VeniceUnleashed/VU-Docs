---
title: AILocoVaultBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[AILocoVaultBinding](#constructor-0)**() |

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
| ------ | ---- |
| **[Clone](#clone)**() | [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AILocoVaultBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AILocoVaultBinding {#constructor-0}
> **AILocoVaultBinding**()

Creates a new [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) frostbite structure.

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
### Clone
> **Clone**(): [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding) type.

