---
title: UnlockableProjectile
---


## Summary
### Constructors
| |
| ----------- |
| **[UnlockableProjectile](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "initialSpeed" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "projectileData" >}} | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) \| nil |
| {{< prop "projectile" >}} | [ProjectileBlueprint](/vext/ref/fb/projectileblueprint) \| nil |
| {{< prop "unlock" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UnlockableProjectile](/vext/ref/fb/unlockableprojectile) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UnlockableProjectile" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UnlockableProjectile {#constructor-0}
> **UnlockableProjectile**()

Creates a new [UnlockableProjectile](/vext/ref/fb/unlockableprojectile) frostbite structure.

## Properties
### {{% prop-heading "initialSpeed" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "projectileData" %}}
> **[ProjectileEntityData](/vext/ref/fb/projectileentitydata)** | **nil**

### {{% prop-heading "projectile" %}}
> **[ProjectileBlueprint](/vext/ref/fb/projectileblueprint)** | **nil**

### {{% prop-heading "unlock" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** | **nil**

## Methods
### Clone
> **Clone**(): [UnlockableProjectile](/vext/ref/fb/unlockableprojectile)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UnlockableProjectile](/vext/ref/fb/unlockableprojectile)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UnlockableProjectile](/vext/ref/fb/unlockableprojectile) type.

