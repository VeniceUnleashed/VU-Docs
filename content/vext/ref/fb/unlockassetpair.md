---
title: UnlockAssetPair
---


## Summary
### Constructors
| |
| ----------- |
| **[UnlockAssetPair](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "second" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "result" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UnlockAssetPair](/vext/ref/fb/unlockassetpair) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UnlockAssetPair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UnlockAssetPair {#constructor-0}
> **UnlockAssetPair**()

Creates a new [UnlockAssetPair](/vext/ref/fb/unlockassetpair) frostbite structure.

## Properties
### {{% prop-heading "second" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** | **nil**

### {{% prop-heading "result" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** | **nil**

## Methods
### Clone
> **Clone**(): [UnlockAssetPair](/vext/ref/fb/unlockassetpair)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UnlockAssetPair](/vext/ref/fb/unlockassetpair)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UnlockAssetPair](/vext/ref/fb/unlockassetpair) type.

