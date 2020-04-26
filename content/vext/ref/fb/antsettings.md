---
title: AntSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AntSettings](#constructor-0)**() |
| **[AntSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AntSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "detailedCollisionSpeedLimit" >}} | float |
| {{< prop "leanSignalScale" >}} | float |
| {{< prop "leanSignalClamp" >}} | float |
| {{< prop "maxInterpolationSlots" >}} | int |
| {{< prop "maxSingleBoneInterpolationSlots" >}} | int |
| {{< prop "reducedInterpolationDistance" >}} | float |
| {{< prop "trajectoryInterpolationDistance" >}} | float |
| {{< prop "forceLodDistance" >}} | float |
| {{< prop "maxAnimatablesPerPoseJob" >}} | int |
| {{< prop "checkGiantSoldiers" >}} | float |
| {{< prop "clientEmulatesServer" >}} | bool |
| {{< prop "useCameraFov" >}} | bool |
| {{< prop "updateEnable" >}} | bool |
| {{< prop "enablePA" >}} | bool |
| {{< prop "useWeaponFov" >}} | bool |
| {{< prop "disableAnimManagerSceneOps" >}} | bool |
| {{< prop "disableAILodFeature" >}} | bool |
| {{< prop "disableModelAnimationCulling" >}} | bool |
| {{< prop "enableJobs" >}} | bool |
| {{< prop "forcePoseUpdate" >}} | bool |
| {{< prop "runAsHighPriority" >}} | bool |
| {{< prop "interpolatePoses" >}} | bool |
| {{< prop "allowVariableTickLength" >}} | bool |
| {{< prop "enablePackageCache" >}} | bool |
| {{< prop "useHIK" >}} | bool |
| {{< prop "updateLoddingEnable" >}} | bool |
| {{< prop "blockOnJobs" >}} | bool |
| {{< prop "enableDebugLogFile" >}} | bool |
| {{< prop "enablePoseJobs" >}} | bool |
| {{< prop "usePA" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntSettings {#constructor-0}
> **AntSettings**()

Creates a new [AntSettings](/vext/ref/fb/antsettings) frostbite instance.

### AntSettings {#constructor-1}
> **AntSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AntSettings](/vext/ref/fb/antsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AntSettings {#constructor-2}
> **AntSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntSettings](/vext/ref/fb/antsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AntSettings](/vext/ref/fb/antsettings). |

## Properties
### {{% prop-heading "detailedCollisionSpeedLimit" %}}
> **float**

### {{% prop-heading "leanSignalScale" %}}
> **float**

### {{% prop-heading "leanSignalClamp" %}}
> **float**

### {{% prop-heading "maxInterpolationSlots" %}}
> **int**

### {{% prop-heading "maxSingleBoneInterpolationSlots" %}}
> **int**

### {{% prop-heading "reducedInterpolationDistance" %}}
> **float**

### {{% prop-heading "trajectoryInterpolationDistance" %}}
> **float**

### {{% prop-heading "forceLodDistance" %}}
> **float**

### {{% prop-heading "maxAnimatablesPerPoseJob" %}}
> **int**

### {{% prop-heading "checkGiantSoldiers" %}}
> **float**

### {{% prop-heading "clientEmulatesServer" %}}
> **bool**

### {{% prop-heading "useCameraFov" %}}
> **bool**

### {{% prop-heading "updateEnable" %}}
> **bool**

### {{% prop-heading "enablePA" %}}
> **bool**

### {{% prop-heading "useWeaponFov" %}}
> **bool**

### {{% prop-heading "disableAnimManagerSceneOps" %}}
> **bool**

### {{% prop-heading "disableAILodFeature" %}}
> **bool**

### {{% prop-heading "disableModelAnimationCulling" %}}
> **bool**

### {{% prop-heading "enableJobs" %}}
> **bool**

### {{% prop-heading "forcePoseUpdate" %}}
> **bool**

### {{% prop-heading "runAsHighPriority" %}}
> **bool**

### {{% prop-heading "interpolatePoses" %}}
> **bool**

### {{% prop-heading "allowVariableTickLength" %}}
> **bool**

### {{% prop-heading "enablePackageCache" %}}
> **bool**

### {{% prop-heading "useHIK" %}}
> **bool**

### {{% prop-heading "updateLoddingEnable" %}}
> **bool**

### {{% prop-heading "blockOnJobs" %}}
> **bool**

### {{% prop-heading "enableDebugLogFile" %}}
> **bool**

### {{% prop-heading "enablePoseJobs" %}}
> **bool**

### {{% prop-heading "usePA" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntSettings](/vext/ref/fb/antsettings) type.

