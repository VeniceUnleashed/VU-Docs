---
title: VisualEnvironmentState
---
## Description

## Constructors

| Constructor                                                                                                                                          | Description                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate)(string **entityName** = "")                                                    |                                                          |
| [VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate)([VisualEnvironmentState](/vext/ref/client/class/visualenvironmentstate) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                 | Type                                                                | Writable | Description |
| -------------------- | ------------------------------------------------------------------- | -------- | ----------- |
| entityName           | string                                                              |          |             |
| visibility           | float                                                               |          |             |
| priority             | int                                                                 |          |             |
| overrideVisibility   | bool                                                                |          |             |
| excluded             | bool                                                                |          |             |
| stateId              | int                                                                 |          |             |
| activeEffectPosition | [Vec3](/vext/ref/shared/class/vec3)                                   |          |             |
| sharedParamsCount    | int                                                                 |          |             |
| outdoorLight         | [OutdoorLightData](/vext/ref/client/class/outdoorlightdata)           |          |             |
| enlighten            | [EnlightenData](/vext/ref/client/class/enlightendata)                 |          |             |
| tonemap              | [TonemapData](/vext/ref/client/class/tonemapdata)                     |          |             |
| colorCorrection      | [ColorCorrectionData](/vext/ref/client/class/colorcorrectiondata)     |          |             |
| sky                  | [SkyData](/vext/ref/client/class/skydata)                             |          |             |
| fog                  | [FogData](/vext/ref/client/class/fogdata)                             |          |             |
| wind                 | [WindData](/vext/ref/client/class/winddata)                           |          |             |
| sunFlare             | [SunFlareData](/vext/ref/client/class/sunflaredata)                   |          |             |
| dynamicAO            | [DynamicAOData](/vext/ref/client/class/dynamicaodata)                 |          |             |
| dof                  | [DofData](/vext/ref/client/class/dofdata)                             |          |             |
| vignette             | [VignetteData](/vext/ref/client/class/vignettedata)                   |          |             |
| filmGrain            | [FilmGrainData](/vext/ref/client/class/filmgraindata)                 |          |             |
| lensScope            | [LensScopeData](/vext/ref/client/class/lensscopedata)                 |          |             |
| cameraParams         | [CameraParamsData](/vext/ref/client/class/cameraparamsdata)           |          |             |
| screenEffect         | [ScreenEffectData](/vext/ref/client/class/screeneffectdata)           |          |             |
| damageEffect         | [DamageEffectData](/vext/ref/client/class/damageeffectdata)           |          |             |
| planarReflection     | [PlanarReflectionData](/vext/ref/client/class/planarreflectiondata)   |          |             |
| dynamicEnvmap        | [DynamicEnvmapData](/vext/ref/client/class/dynamicenvmapdata)         |          |             |
| characterLighting    | [CharacterLightingData](/vext/ref/client/class/characterlightingdata) |          |             |
| motionBlur           | [MotionBlurData](/vext/ref/client/class/motionblurdata)               |          |             |
