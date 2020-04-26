---
title: ShotConfigData
---

## Summary

### Constructors

|  |
| --- |
| **[ShotConfigData](#constructor-0)**() |
| **[ShotConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "initialPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "initialDirection" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "initialSpeed" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "inheritWeaponSpeedAmount" >}} | float |
| {{< prop "muzzleExplosion" >}} | [ExplosionEntityData](/vext/ref/fb/explosionentitydata) \| nil |
| {{< prop "projectileData" >}} | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) \| nil |
| {{< prop "secondaryProjectileData" >}} | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) \| nil |
| {{< prop "projectile" >}} | [ProjectileBlueprint](/vext/ref/fb/projectileblueprint) \| nil |
| {{< prop "secondaryProjectile" >}} | [ProjectileBlueprint](/vext/ref/fb/projectileblueprint) \| nil |
| {{< prop "alternateProjectiles" >}} | [UnlockableProjectile](/vext/ref/fb/unlockableprojectile)[] |
| {{< prop "spawnDelay" >}} | float |
| {{< prop "numberOfBulletsPerShell" >}} | int |
| {{< prop "numberOfBulletsPerShot" >}} | int |
| {{< prop "numberOfBulletsPerBurst" >}} | int |
| {{< prop "relativeTargetAiming" >}} | bool |
| {{< prop "forceSpawnToCamera" >}} | bool |
| {{< prop "spawnVisualAtWeaponBone" >}} | bool |
| {{< prop "activeForceSpawnToCamera" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ShotConfigData](/vext/ref/fb/shotconfigdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ShotConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ShotConfigData {#constructor-0}

> **ShotConfigData**()

Creates a new [ShotConfigData](/vext/ref/fb/shotconfigdata) frostbite instance.

### ShotConfigData {#constructor-1}

> **ShotConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ShotConfigData](/vext/ref/fb/shotconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "initialPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "initialDirection" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "initialSpeed" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "inheritWeaponSpeedAmount" %}}

> **float**

### {{% prop-heading "muzzleExplosion" %}}

> **[ExplosionEntityData](/vext/ref/fb/explosionentitydata)** \| **nil**

### {{% prop-heading "projectileData" %}}

> **[ProjectileEntityData](/vext/ref/fb/projectileentitydata)** \| **nil**

### {{% prop-heading "secondaryProjectileData" %}}

> **[ProjectileEntityData](/vext/ref/fb/projectileentitydata)** \| **nil**

### {{% prop-heading "projectile" %}}

> **[ProjectileBlueprint](/vext/ref/fb/projectileblueprint)** \| **nil**

### {{% prop-heading "secondaryProjectile" %}}

> **[ProjectileBlueprint](/vext/ref/fb/projectileblueprint)** \| **nil**

### {{% prop-heading "alternateProjectiles" %}}

> **[UnlockableProjectile](/vext/ref/fb/unlockableprojectile)**[]

### {{% prop-heading "spawnDelay" %}}

> **float**

### {{% prop-heading "numberOfBulletsPerShell" %}}

> **int**

### {{% prop-heading "numberOfBulletsPerShot" %}}

> **int**

### {{% prop-heading "numberOfBulletsPerBurst" %}}

> **int**

### {{% prop-heading "relativeTargetAiming" %}}

> **bool**

### {{% prop-heading "forceSpawnToCamera" %}}

> **bool**

### {{% prop-heading "spawnVisualAtWeaponBone" %}}

> **bool**

### {{% prop-heading "activeForceSpawnToCamera" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [ShotConfigData](/vext/ref/fb/shotconfigdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ShotConfigData](/vext/ref/fb/shotconfigdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ShotConfigData](/vext/ref/fb/shotconfigdata) type.

