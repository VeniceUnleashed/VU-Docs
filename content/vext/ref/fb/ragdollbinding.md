---
title: RagdollBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[RagdollBinding](#constructor-0)**() |

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
| ------ | ---- |
| **[Clone](#clone)**() | [RagdollBinding](/vext/ref/fb/ragdollbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RagdollBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RagdollBinding {#constructor-0}
> **RagdollBinding**()

Creates a new [RagdollBinding](/vext/ref/fb/ragdollbinding) frostbite structure.

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
### Clone
> **Clone**(): [RagdollBinding](/vext/ref/fb/ragdollbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[RagdollBinding](/vext/ref/fb/ragdollbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RagdollBinding](/vext/ref/fb/ragdollbinding) type.

